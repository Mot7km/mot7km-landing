<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Design System Rules & Guidelines

- **Adhere to `DESIGN.md`**: All UI modifications and new components must follow the rules in `DESIGN.md`.
- **Light Mode Eye-Comfort**: Light mode background must remain `#F4F6FB` (Soft Cool Slate). Never use pure `#FFFFFF` or high glare backgrounds for page containers.
- **Glassmorphism & Micro-Borders**: Rely on 1px subtle borders (`border-slate-200/60` in light mode, `border-white/10` in dark mode) and glass panels (`.glass-panel`) for card depth.
- **Strict SVG Icons (No Emojis)**: Never use raw emojis (e.g. 📈, ⚡, ★) in component text, badges, or buttons. Use `lucide-react` SVG components strictly.
- **3D Visual Depth**: Use CSS 3D perspectives (`perspective-1000 rotateX rotateY transform-gpu`), floating glass cards, and interactive mouse depth.
- **Typography & RTL**: Ensure Arabic (`Cairo`) and English (`Roboto`) fonts render correctly in both RTL (`dir="rtl"`) and LTR layouts.
- **Colors**:
  - Primary: `#1683C7`
  - Secondary: `#0F766E`
  - Accent: `#06B6D4`

