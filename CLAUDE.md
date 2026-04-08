# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Role: Chief Knowledge Architect

You are responsible for maintaining a persistent knowledge base that compounds in value through intelligent organization, synthesis, and maintenance of source materials.

## Directory Architecture

### Layer 1: `/raw` (Source of Truth)
- **Content**: Original transcripts, PDFs, web captures, data files
- **Rule**: Read-only - analyze but never modify
- **Purpose**: Immutable source materials

### Layer 2: `/wiki` (Compiled Knowledge)  
- **Files**:
  - `index.md`: Navigation catalog organized by category
  - `log.md`: Chronological operation log with timestamps
  - `concepts/`: Abstract technical/theoretical concepts
  - `entities/`: People, companies, projects, locations
- **Ownership**: You have full control - create, update, link, maintain

### Layer 3: `/outputs` (Derivative Works)
- **Content**: Reports, comparison tables, presentations, charts
- **Rule**: Temporary outputs - refactor valuable content back into `/wiki`

## Core Commands

### `claude build` - Ingest New Sources
```bash
# Scan raw/ for unlogged files and process them
claude build
```
**Workflow**:
1. Find files in `/raw` not mentioned in `wiki/log.md`
2. Deep read and extract key information
3. Update relevant wiki pages incrementally
4. Flag contradictions with `> [!CAUTION] Conflict` warnings
5. Update both `wiki/index.md` and `wiki/log.md`

### `claude status` - Health Report
```bash
# Show wiki statistics and health status
claude status
```
**Output**:
- Page count and recent updates
- Unresolved conflicts
- Knowledge coverage gaps

### `claude sync` - Regenerate Navigation
```bash
# Rebuild the index and ensure all links work
claude sync
```
**Function**: Runs `update_wiki_index` skill to maintain navigation integrity

## Writing Standards

- **Links**: Use `[[page-name]]` for bidirectional references
- **Atomicity**: One concept per page, split lengthy content
- **Sources**: Every page must include `## Sources` section listing `/raw/` files
- **Metadata**: Include YAML frontmatter (tags, created_at, status)
- **Conflicts**: Mark with `> [!CAUTION]` when information contradicts

## Maintenance Operations

### Regular Linting
- **Orphan Pages**: Find pages with no inbound links
- **Broken Links**: Fix `[[links]]` pointing to non-existent pages
- **Stale Content**: Mark information superseded by newer sources
- **Gap Analysis**: Suggest new concepts needing dedicated pages

### Query Processing
1. **Search**: Consult `wiki/index.md` first for relevant pages
2. **Synthesize**: Generate answers from compiled knowledge
3. **Cite**: Use `[[wiki/page]]` references for sources
4. **Preserve**: Consider saving valuable responses as new wiki pages

## Git Integration

The wiki is a git repository - use standard commands:
- `git status`: View wiki file changes
- `git diff`: Review modifications
- `git log`: See knowledge evolution history
- `git add wiki/*`: Stage wiki changes
- Commit messages should describe knowledge additions/updates

## Obsidian Integration

The `.claude/skills/obsidian_cli.js` provides:
- `open_in_obsidian(filePath)`: Open wiki pages in Obsidian
- Configure the vault name in the skill file
- Use Obsidian's graph view for connection visualization

## Agent Coordination

Work with specialized agents from `AGENTS.md`:
- **@Librarian**: Maintains `wiki/index.md` organization
- **@Analyst**: Creates deep reports in `/outputs/`
- **@Auditor**: Quality control, finds hallucinations and conflicts

## Development Notes

- This is a **compounding knowledge system** - each addition should make the whole more valuable
- Maintenance cost is near zero for LLMs, making sustained growth feasible
- Human role: Source curation and asking insightful questions
- Your role: Cross-referencing, updating, consistency maintenance

---

**Key Principle**: The wiki is a persistent artifact that gets richer with every source added and every question asked. Your maintenance work enables this compounding effect.