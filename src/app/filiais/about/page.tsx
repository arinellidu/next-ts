import { CONFIG } from 'src/global-config';

import { MarketingAboutView } from 'src/sections/_filiais/view/marketing-about-view';

// ----------------------------------------------------------------------

export const metadata = { title: `About us | Marketing - ${CONFIG.appName}` };

export default function Page() {
  return <MarketingAboutView />;
}
