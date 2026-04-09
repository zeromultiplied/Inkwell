# Automatic Git Commit Hook System

## Overview
This system provides automatic git commits triggered by file changes or task completion in the Inkwell knowledge base.

## Components

### 1. Git Hook (`.git/hooks/post-change`)
- **Location**: `.git/hooks/post-change`
- **Purpose**: Automatically commits staged changes with descriptive messages
- **Features**:
  - Generates context-aware commit messages
  - Special handling for wiki files (uses `[[page-name]]` format)
  - Pushes to remote repository after commit
  - Dry-run mode for testing: `./.git/hooks/post-change --dry-run`

### 2. Claude Configuration (`.claude/settings.json`)
- **Hooks configured**:
  - `afterEdit`: Triggers after file editing operations
  - `afterTaskComplete`: Triggers after task completion
- **Both hooks** call the same auto-commit script

## Usage

The system works automatically when:
1. Files are modified and staged (through normal editing)
2. Claude tasks complete (through `afterTaskComplete` hook)

### Manual Testing
```bash
# Create test file
echo "test" > test-file.txt

# Stage changes
git add test-file.txt

# Run auto-commit manually
.git/hooks/post-change

# Dry-run test
.git/hooks/post-change --dry-run
```

### Commit Message Examples
- **Wiki files**: `wiki: Added [[page-name]]` or `wiki: Updated [[page-name]]`
- **Other files**: `Updated: filename1.txt filename2.txt`
- **Multiple changes**: Generic descriptive messages

## Safety Features
- **Dry-run mode**: Preview what would be committed
- **Error handling**: Graceful failure with clear messages
- **No interference**: Manual git operations still work normally
- **Conflict detection**: Skips auto-commit if conflicts exist

## Integration
Works seamlessly with:
- `claude build` - knowledge ingestion
- `claude sync` - navigation updates
- Manual editing operations

All auto-commits are logged in the git history for transparency.