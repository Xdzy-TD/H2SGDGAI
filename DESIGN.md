---
name: Orbital Infrastructure
colors:
  surface: '#10131f'
  surface-dim: '#10131f'
  surface-bright: '#363846'
  surface-container-lowest: '#0b0d1a'
  surface-container-low: '#191b28'
  surface-container: '#1d1f2c'
  surface-container-high: '#272937'
  surface-container-highest: '#323442'
  on-surface: '#e1e1f3'
  on-surface-variant: '#cfc2d6'
  inverse-surface: '#e1e1f3'
  inverse-on-surface: '#2d303d'
  outline: '#988d9f'
  outline-variant: '#4d4354'
  surface-tint: '#ddb7ff'
  primary: '#ddb7ff'
  on-primary: '#490080'
  primary-container: '#b76dff'
  on-primary-container: '#400071'
  inverse-primary: '#842bd2'
  secondary: '#d2bbff'
  on-secondary: '#3f008e'
  secondary-container: '#6001d1'
  on-secondary-container: '#c9aeff'
  tertiary: '#7bd0ff'
  on-tertiary: '#00354a'
  tertiary-container: '#009bd1'
  on-tertiary-container: '#002d40'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#f0dbff'
  primary-fixed-dim: '#ddb7ff'
  on-primary-fixed: '#2c0051'
  on-primary-fixed-variant: '#6900b3'
  secondary-fixed: '#eaddff'
  secondary-fixed-dim: '#d2bbff'
  on-secondary-fixed: '#25005a'
  on-secondary-fixed-variant: '#5a00c6'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7bd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#10131f'
  on-background: '#e1e1f3'
  surface-variant: '#323442'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 72px
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 38px
    fontWeight: '800'
    lineHeight: 44px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 44px
    fontWeight: '700'
    lineHeight: 52px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-telemetry:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  badge-label:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.75rem
  space-xl: 3rem
---

## Brand & Style

This design system embodies the rigor, precision, and technological optimism of modern orbital logistics and private aerospace infrastructure. The target audience comprises aerospace mission directors, satellite operators, payload integrators, and deep-tech enterprise leaders who demand mission-critical dependability alongside next-generation execution.

The visual style merges **Glassmorphism** with **High-Contrast Deep Space Tech**:
- **Atmosphere:** Deep midnight voids punctuated by spectral ultraviolet and electric violet luminescence, evoking orbital horizons and telemetry terminals.
- **Surface Quality:** Precision-machined frosted glass panels floating above midnight strata, featuring sub-pixel edge lighting and subtle radial bloom.
- **Tone:** Authoritative, razor-sharp, forward-deployed, and sophisticated. It rejects playful skeuomorphism in favor of high-performance technical elegance.

## Colors

The palette establishes an ultra-deep cosmic scale contrasting with high-energy ionization glows.

- **Primary (`#A855F7`) & Secondary (`#7C3AED`):** Represent propulsion ionization, telemetry beacons, and key conversion paths. Accented by a lighter electric lavender (`#C084FC`) for hover highlights and focal hotspots.
- **Tertiary (`#38BDF8`):** Cryogenic cyan, deployed sparingly for orbital state vectors, live sensor feeds, and active downlink indicators.
- **Neutral Void Strata:**
  - Base Deep Canvas: `#060814`
  - Elevated Container / Orbital Shell: `#0B0F28`
  - Surface Glass: `rgba(15, 23, 58, 0.45)` with `rgba(168, 85, 247, 0.12)` dynamic edge refraction.
- **Typography & High-Contrast Accents:**
  - Primary Text: `#F8FAFC` (near 100% luminance against deep cosmic canvases).
  - Secondary / Data Label Text: `#94A3B8`.
  - Dim / Grid Dividers: `rgba(148, 163, 184, 0.12)`.

## Typography

Typography establishes an immediate hierarchy between strategic visionary statements and precision orbital mechanics:

- **Headlines (Plus Jakarta Sans):** High modern geometric clarity with tight letter-spacing (`-0.02em` on hero displays) to convey technical authority without feeling industrial or rustic.
- **Body Text (Inter):** Highly legible, neutral workhorse ensuring uninterrupted comprehension of dense orbital schedules, telemetry logs, and API specifications.
- **Telemetry & Metadata (JetBrains Mono):** Dedicated to tabular numbers, coordinates, orbital apogee/perigee values, and payload metrics. Enforces an unmistakable aerospace instrumentation signature.

## Layout & Spacing

This design system employs a **12-column fluid grid** with a maximum container threshold of `1440px`.

- **Desktop (1280px+):** 12 columns, `1.5rem` (`24px`) gutters, `3rem` (`48px`) margins. Section vertical spacing adheres to an expanded cadence of `5rem` to `8rem` (`80px`–`128px`), giving aerospace components breathing room akin to the expanse of space.
- **Tablet (768px - 1279px):** 8 columns, `1.5rem` gutters, `2rem` margins. Nested dashboard metrics transition to dual-column telemetry modules.
- **Mobile (< 768px):** 4 columns, `1rem` (`16px`) gutters, `1.25rem` (`20px`) margins. Cards, timelines, and launch countdown manifests stack vertically with no horizontal overflow.

## Elevation & Depth

Visual hierarchy does not rely on opaque dropshadows; depth is generated via **optically simulated light transmission and multi-layered glass strata**:

- **Ground Level (Canvas):** Deep voids (`#060814`) overlaid with faint CSS radial light blooms (`radial-gradient(circle at 50% 0%, rgba(124, 58, 237, 0.15), transparent 70%)`).
- **Mid-Tier (Glass Panels & Flight Manifests):** `rgba(11, 15, 40, 0.65)` fill, `backdrop-filter: blur(16px)`, enclosed by an ultra-thin 1px border colored `rgba(168, 85, 247, 0.22)`.
- **Top-Tier / Interactive Overlays (Hover States, Modals, Flight Control Menus):** `rgba(15, 23, 58, 0.85)` fill, `backdrop-filter: blur(24px)`, bounded by an incandescent gradient perimeter border:
  `linear-gradient(135deg, rgba(192, 132, 252, 0.6) 0%, rgba(124, 58, 237, 0.2) 50%, rgba(56, 189, 248, 0.3) 100%)`.
- **Cosmic Glow Highlight:** Active triggers and focal stats cast a soft, diffused radial halo: `box-shadow: 0 0 35px -5px rgba(168, 85, 247, 0.35)`.

## Shapes

The design system maintains a balanced **Rounded (`2`)** profile. Standard UI elements utilize `0.5rem` (`8px`) radiuses, large glass cards use `1rem` (`16px`), and feature panels expand to `1.5rem` (`24px`). Pill shapes (`9999px`) are strictly reserved for launch status badges, live telemetry counters, and category pills to preserve distinction against structural UI panels.

## Components

### Buttons
- **Primary Propulsion Button:** Gradient fill `linear-gradient(135deg, #A855F7 0%, #7C3AED 100%)`, crisp text in `#FFFFFF`, with `0.5rem` border radius. Features an ambient glow: `box-shadow: 0 0 20px rgba(168, 85, 247, 0.45)`. On hover, the luminance increases with an accent edge bloom (`#C084FC`).
- **Secondary Ghost-Glass Button:** Background `rgba(255, 255, 255, 0.03)`, border `1px solid rgba(168, 85, 247, 0.35)`, text `#F8FAFC`. On hover, fill deepens to `rgba(168, 85, 247, 0.15)` with border color shifting to `#C084FC`.

### Glass Cards & Flight Manifest Modules
- Encased in `backdrop-filter: blur(16px)` with an outer container of `rgba(11, 15, 40, 0.6)`.
- Delicately framed with `1px solid rgba(168, 85, 247, 0.18)`.
- Hovering smoothly scales the border illumination to `rgba(192, 132, 252, 0.5)` and triggers an internal cosmic radial light flare anchored to cursor proximity.

### Badges & Status Pills
- Pill-shaped (`border-radius: 9999px`), padding `0.25rem 0.75rem`.
- **Upcoming Launch / Active Status:** Background `rgba(168, 85, 247, 0.12)`, border `1px solid rgba(168, 85, 247, 0.4)`, typography `JetBrains Mono` or `Plus Jakarta Sans` bold in `#C084FC`, with a pulsed internal status indicator dot.

### Telemetry & Mission Data Tables
- Flush, low-friction technical grids without heavy bounding lines.
- Horizontal row separators rendered with `1px solid rgba(148, 163, 184, 0.08)`.
- Column headers styled with `JetBrains Mono`, uppercase, tracking `+0.05em`, color `#94A3B8`.
- Row hover states illuminate via an inline sweep: `background: linear-gradient(90deg, rgba(168, 85, 247, 0.08) 0%, transparent 100%)`.

### Input Fields & Search Bars
- Background `rgba(6, 8, 20, 0.75)`, border `1px solid rgba(148, 163, 184, 0.2)`.
- Placeholder text `#94A3B8`, typed values `#F8FAFC` set in `Inter`.
- Focus state instantly activates a sharp 1px ring in `#A855F7` accompanied by `box-shadow: 0 0 15px rgba(168, 85, 247, 0.25)`.

### Checkboxes & Segmented Toggles
- Custom `0.25rem` rounded boxes featuring `#0B0F28` backgrounds with `1px solid rgba(168, 85, 247, 0.4)`. Checked states fill with the primary violet gradient and display an illuminated white technical check glyph.
