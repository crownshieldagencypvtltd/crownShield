# Crown Shield Agency CMS Guide

## Overview
This CMS file (`cms.ts`) contains the structure and content of the Crown Shield Agency website. Modifications to this file will reflect across the website dynamically.

## Structure
The CMS file is structured into the following sections:

### 1. `siteInfo`
Contains general information about the website, such as:
- `title`: The website title.
- `description`: A short description used for SEO.
- `logo`: Path to the logo image.

### 2. `navigation`
Defines the navigation menu, including links to different sections.

### 3. `pages`
Holds content for individual pages:
- `home`: Data for the homepage.
- `about`: Information about the company.
- `services`: List of services offered.
- `contact`: Contact details and form settings.
- `careers`: Job listings and career opportunities.
- `blog`: Blog page structure.

### 4. `shared`
Contains reusable elements used across the site:
- `callToAction`: Call-to-action button details.
- `footer`: Footer content and links.
- `whatsApp`: WhatsApp button settings.

## How to Edit
1. Open `cms.ts` in a text editor.
2. Modify the values within the relevant objects.
3. Save the file, and the changes will take effect automatically on the website.

## Example Modification
If you want to update the website title, locate the `siteInfo` section and edit:
```typescript
siteInfo: {
  title: "Crown Shield Agency",
  description: "Your trusted agency for digital solutions.",
  logo: "/images/logo.png"
}
```
Change the `title` and `description` values to reflect the new branding.

## Notes
- Ensure the structure remains consistent with the TypeScript interface.
- Use valid paths for images and links.
- For major structural changes, update the corresponding interfaces in `cms.ts`.

This guide should help users modify the CMS file effectively. For further questions, contact the development team.

