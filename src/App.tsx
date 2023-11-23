import { CookieProvider } from "./application/context/CookieContext";
import { CookieThemeConfig } from "./application/model/cookiethemeconfig/CookieThemeConfig";
import { CookiePage } from "./presentation/components/cookiepage/CookiePage";

function App() {

  const themeConfig = new CookieThemeConfig();
  themeConfig.backgroundColor = '#EFEFEF';
  themeConfig.primaryAccentColor = '#EBAF24';
  themeConfig.hoverPrimaryAccendColor = '#FFAA00';
  themeConfig.backgroundCardColor = '#242424';
  themeConfig.primaryTextColor = '#464646';
  themeConfig.secondaryTextColor = '#000';


  return (
    <>
    <CookieProvider>
      <CookiePage
          themeConfig={themeConfig}
        />
    </CookieProvider>

      
    </>
  )
}

export default App;
