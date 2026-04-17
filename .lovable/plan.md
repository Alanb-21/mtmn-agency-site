

## Update primary colour to cyan #00E5FF

### File: `src/index.css`

**Changes:**
1. Update `--primary` token from `213 47% 91%` to `187 100% 50%` (HSL for #00E5FF)
2. Update `--ring` from `213 47% 91%` to `187 100% 50%` (matches primary)
3. Update `--accent` from `213 47% 91%` to `187 100% 50%` (matches primary)
4. Update `--card-foreground`, `--popover-foreground`, `--foreground`, `--muted` — these all currently use `213 47% 91%` (the old #DEE7F1). Change all to `187 100% 50%`.
5. Update `--sidebar-foreground`, `--sidebar-primary`, `--sidebar-ring` — same change.

Note: `index.css` does not contain literal `#DEE7F1` or `hsl(var(--primary))` strings — the colour lives in HSL tokens. The MTMN opacity tokens (`--mtmn-border`, `--mtmn-muted`, etc.) use literal `rgba(222, 231, 241, ...)` which is #DEE7F1. Per your instruction to replace every #DEE7F1, these will be converted to `rgba(0, 229, 255, ...)` keeping their existing alpha values.

### Files NOT touched
Tailwind config, all pages, Nav, Footer, components.

### Heads-up
This will turn every primary text element, button background, border tint, and muted text across the entire site cyan. The "three colours only" core memory rule (#000, #DEE7F1, #fff) will be violated by this change — confirming you want to proceed anyway.

