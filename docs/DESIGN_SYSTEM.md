# Aurum Ledger — Enterprise Design System Specification

## 1. Visual Philosophy & Design Principles
Aurum Ledger is an enterprise gold-asset management system handling hundreds of crores in physical bullion and jewellery. The visual language conveys:
- **Quiet Authority & Precision:** Muted luxury rather than gaudy opulence.
- **Financial Clarity:** High-contrast data density, clean tabular numerals, unambiguous status indicators.
- **Zero Distraction:** Elimination of neon highlights, heavy glassmorphism, and cartoonish borders.

---

## 2. Color Palette & Design Tokens

### Primary Canvas & Surfaces
| Token Name | Hex Code | HSL Representation | Application |
| :--- | :--- | :--- | :--- |
| `background` | `#FAF9F5` | `hsl(43, 27%, 97%)` | Warm white primary background canvas. |
| `surface` | `#FFFFFF` | `hsl(0, 0%, 100%)` | Card containers, modals, table surfaces. |
| `surface-subtle` | `#F5F3ED` | `hsl(43, 24%, 94%)` | Table headers, secondary toolbars, sidebars. |
| `surface-accent` | `#ECE8DC` | `hsl(43, 22%, 89%)` | Input backgrounds, hover states, active pill fills. |

### Typography & Neutrals
| Token Name | Hex Code | HSL Representation | Application |
| :--- | :--- | :--- | :--- |
| `foreground` | `#1A1815` | `hsl(36, 11%, 10%)` | Deep charcoal primary text, headings, figures. |
| `foreground-muted` | `#68645C` | `hsl(38, 6%, 38%)` | Secondary metadata, labels, table headers. |
| `border` | `#E3DFD5` | `hsl(42, 16%, 86%)` | Subtle borders for cards, dividers, and inputs. |
| `border-strong` | `#C8C2B3` | `hsl(41, 14%, 74%)` | Focused input borders, active tab indicators. |

### Luxury Gold Accents (Restrained Champagne)
| Token Name | Hex Code | Application |
| :--- | :--- | :--- |
| `gold-primary` | `#9B783E` | Primary action buttons, brand marks, key focal points. |
| `gold-hover` | `#846532` | Interactive button hover state. |
| `gold-muted` | `#D8C8A8` | Subtle border accents, decorative underlines. |
| `gold-subtle` | `#FBF7EE` | Badge backgrounds, highlighted row accents. |

### Semantic Indicators
| Status | Background | Border | Text | Application |
| :--- | :--- | :--- | :--- | :--- |
| **Normal / Success** | `#F0F7F2` | `#CDE6D4` | `#1E6536` | Balanced accounts, verified receipts, job completion. |
| **Pending / Warning** | `#FEF9EC` | `#F5E1AA` | `#8C6514` | Jobs awaiting completion, open variance within wastage. |
| **Loss Alert / Danger** | `#FDF2F2` | `#F8CBCB` | `#A62424` | Excess variance, unauthorized threshold breaches. |
| **Informational** | `#F0F5FA` | `#CDE0F3` | `#1A538C` | Transaction receipts, audit metadata, demo notices. |

---

## 3. Typography Hierarchy & Numerical Standards

### Typeface
- **Primary Font Family:** Inter / Geist Sans (`sans-serif`).
- **Numerical Variant:** Fixed-width tabular figures (`font-variant-numeric: tabular-nums`).

### Type Scales
- **Display 1 (Workshop Title):** 24px (1.5rem) / Line height 1.25 / Medium (500)
- **Section Heading (Card Header):** 16px (1.0rem) / Line height 1.35 / Semi-bold (600)
- **Body Regular:** 14px (0.875rem) / Line height 1.45 / Regular (400)
- **Caption / Label:** 12px (0.75rem) / Line height 1.35 / Medium (500) / Tracking +0.02em uppercase
- **Metric Big Numbers:** 28px (1.75rem) / Line height 1.15 / Semi-bold (600) / Tabular

### Gold Weight Formatting Rules
1. **Always 3 decimal places:** `109.920 g`, `103.004 g`, `3.893 g`.
2. **Right-aligned in tables:** Gram columns must right-align with equal width to ensure decimal points vertically align across all rows.
3. **Purity formatting:** Always 2 decimal places with percentage symbol: `91.60%`, `75.00%`.

---

## 4. Spacing, Elevation & Borders
- **Spacing Grid:** 4px base scale (`p-1` = 4px, `p-2` = 8px, `p-3` = 12px, `p-4` = 16px, `p-6` = 24px).
- **Corner Radii:** Subtle, tailored corners:
  - Buttons / Inputs: `rounded-md` (6px)
  - Cards / Tables: `rounded-lg` (8px)
  - Badges / Pills: `rounded-full` (9999px)
- **Shadows:** Soft, natural ambient shadows:
  - Card Shadow: `0 1px 3px 0 rgba(26, 24, 21, 0.04), 0 1px 2px -1px rgba(26, 24, 21, 0.02)`
  - Elevated Popover: `0 4px 6px -1px rgba(26, 24, 21, 0.06), 0 2px 4px -2px rgba(26, 24, 21, 0.03)`

---

## 5. Enterprise Component Library Catalog

1. **Button (`Button.tsx`):** Variants (`primary`, `secondary`, `outline`, `ghost`, `danger`), sizes (`sm`, `md`, `lg`), with loading spinner and disabled state.
2. **Input (`Input.tsx`):** Clear typography, visible focus ring (`ring-1 ring-gold-primary`), support for left/right icon prefixes.
3. **Select (`Select.tsx`):** Styled custom and native dropdown support with keyboard accessibility.
4. **SearchInput (`SearchInput.tsx`):** Input with embedded magnifying glass icon, keyboard shortcuts (`Ctrl+K`), and clear button.
5. **Card (`Card.tsx`):** Base container with subtle border (`border-border`), warm surface (`bg-surface`), and structured header/content/footer.
6. **Badge (`Badge.tsx`):** Compact status pills (`success`, `warning`, `danger`, `info`, `gold`) with tabular text.
7. **DataTable (`DataTable.tsx`):** High-density financial table with striped hover states, right-aligned numbers, and responsive scroll container.
8. **Dialog (`Dialog.tsx`):** Accessible modal overlay with backdrop blur, keyboard `Escape` trap, and accessible focus.
9. **Drawer (`Drawer.tsx`):** Slide-over panel for mobile navigation and detailed transaction inspect views.
10. **Dropdown (`Dropdown.tsx`):** Accessible floating menu for user actions and export options.
11. **Tabs (`Tabs.tsx`):** Understated tab bar with subtle champagne border indicator.
12. **Toast (`Toast.tsx`):** Notification toasts for feedback on transaction saves and alert triggers.
13. **Tooltip (`Tooltip.tsx`):** Micro-explanations for calculation formulas and wastage definitions.
14. **Skeleton (`Skeleton.tsx`):** Subtle shimmer loaders matching warm white tones.
15. **EmptyState (`EmptyState.tsx`):** Clean, dignified placeholder when search or table results are empty.
16. **ErrorState (`ErrorState.tsx`):** Clear operational error presentation with recovery action.
17. **ConfirmationDialog (`ConfirmationDialog.tsx`):** High-friction confirmation modal for irreversible actions (e.g. closing job, loss write-off).
18. **PageHeader (`PageHeader.tsx`):** Standard header displaying page title, breadcrumb hierarchy, and contextual action buttons.

---

## 6. Responsive Breakpoint Standards
- **Desktop (1440px+):** Full multi-column dashboard with persistent left sidebar (260px) and wide data tables.
- **Laptop (1280px):** Responsive 4-card KPI grid with optimized chart aspect ratios.
- **Tablet (768px - 1024px):** 2-column KPI grid, collapsible sidebar into compact mode, horizontally scrollable data tables.
- **Mobile (390px - 414px):** Single-column stacked layout, header slide-over navigation drawer, card-based transaction list representation.
- **Small Mobile (360px):** Touch-friendly buttons (minimum 44px tap targets), truncated non-essential columns, zero horizontal page overflow.
