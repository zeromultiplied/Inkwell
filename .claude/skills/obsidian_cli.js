import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

/**
 * 在 Obsidian 中打开指定页面
 * @param {string} filePath 文件相对于库根目录的路径 (例如 wiki/index.md)
 */
export async function open_in_obsidian(filePath) {
    // 这里需要替换为你自己的 Obsidian 库名称
    const vaultName = "MyLLMWiki";
    const encodedPath = encodeURIComponent(filePath);
    const uri = `obsidian://open?vault=${vaultName}&file=${encodedPath}`;

    try {
        // 适配 Mac (open) 和 Windows (start)
        const command = process.platform === 'darwin' ? `open "${uri}"` : `start "" "${uri}"`;
        await execAsync(command);
        return `Successfully opened ${filePath} in Obsidian.`;
    } catch (error) {
        return `Error opening Obsidian: ${error.message}`;
    }
}
