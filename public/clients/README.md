# Client logos

Add your client logo images here. They appear in the "Trusted by businesses" section on the homepage.

**Recommended:**
- Filenames: `logo-1.png`, `logo-2.png`, … (or update the list in `src/components/home/ClientLogos.tsx`)
- Format: PNG with transparent or white background
- Height: ~48px (width can vary; logos are displayed with `object-contain` in a fixed-height card)
- Cropped/square or landscape logos work best

Then update the `clientLogos` array in `ClientLogos.tsx` with your filenames and proper `alt` text for each client.
