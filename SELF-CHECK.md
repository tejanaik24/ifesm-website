# SELF-CHECK: Remove Picture from Vision / Mission / Quality Section

## 1. Summary of Work
Client (Kusuma, IFESM) requested removing the picture from the homepage Vision / Mission / Quality section (an AI photo of an older man in a safety vest writing at a desk with ISO 9001 internal audit reports).
The photo has been removed from the homepage `CompanyIntro` component. The Vision, Mission, and Quality cards were reformatted into a centered, balanced responsive grid that looks great on desktop (3-column layout) and mobile (1-column layout at 375px+), eliminating the empty gap on the left.

## 2. Changes Made (file:line)

### `src/components/UI/CompanyIntro/index.tsx`
- **Lines 4, 12, 45-64 (prior to edit)**:
  - Removed unused imports: `RevealCover`, `GhostMotif`, `Div`, `imageVariants`, `company_portrait`, `ContentGrid`, `ImageCtn`.
  - Removed `<ContentGrid>` wrapper and `<ImageCtn>` containing the portrait image `<Image src={company_portrait} alt="IFESM safety officer reviewing ISO 9001 documentation" fill ... />`.
  - Rendered `<Pillars>` directly inside `<Inner>` without the 2-column image layout.

### `src/components/UI/CompanyIntro/styles.ts`
- **Lines 61-87 (prior to edit)**:
  - Removed `ContentGrid` (`grid-template-columns: 360px 1fr`) and `ImageCtn` styled components.
  - Updated `Pillars` to:
    ```ts
    export const Pillars = styled.div`
      width: 100%;
      max-width: 1200px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      margin-bottom: 3.5rem;

      @media (max-width: 900px) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
        margin-bottom: 2.5rem;
      }
    `;
    ```
  - Updated `Pillar` padding, gap, and line-height with mobile media query:
    ```ts
    export const Pillar = styled.div`
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 2.25rem 2rem;
      border-radius: 0.75rem;
      border: 1px solid rgba(255, 255, 255, 0.08);
      background: rgba(0, 0, 0, 0.02);

      p {
        color: var(--link-color);
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.6;
      }

      @media (max-width: 768px) {
        padding: 1.75rem 1.5rem;
      }
    `;
    ```

### `BRAIN.md`
- **Lines 236-239**: Added Session 12 entry documenting the removal and re-layout.

## 3. Site-Wide Image Usage Check
- Searched repository for references to `company-intro-portrait`:
  - `git grep -i -n "company-intro-portrait"` returned only `src/components/UI/CompanyIntro/index.tsx`.
- Searched all images in `public/` matching the SHA256 hash (`314967DD3CF46CF7FD7E3C07292D9EE91CE9CCC23987E2B9644EE58627EE170E`):
  - Only `public/ifesm/company-intro-portrait.jpg` matched.
- Checked `src/components/UI/ProfilePage`:
  - The Profile page uses `pageheader-facility-banner.jpg` and `profile-team-onsite.jpg`. Its Vision/Mission/Quality pillars do not use an image (they render text and SVG icons only).
- **Result:** The image was NOT used on any other page on the site.
- Per rule, `public/ifesm/company-intro-portrait.jpg` was NOT deleted.

## 4. Build Verification & Static Export
- Executed `npm run build`:
  - Exit code: `0` (Success).
  - 15 static HTML routes generated.
  - Route list:
    - `/` (Home)
    - `/_not-found`
    - `/blog`
    - `/blog/why-fire-and-safety-training-matters-for-every-workplace`
    - `/careers`
    - `/clients`
    - `/contact`
    - `/find-a-job`
    - `/gallery`
    - `/profile`
    - `/services`
    - `/training`
- Verified static output directory `out/`:
  - `out/index.html` was regenerated at build time (11/18/2026 12:37:05 PM).
  - Confirmed `company-intro-portrait` does not appear in `out/index.html`.

## 5. Anything Not Done / Blockers
- None. All requested changes were implemented, tested, and verified. No deployment or git push was performed (per instructions).
