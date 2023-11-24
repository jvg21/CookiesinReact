import { CookieProvider } from "./application/context/CookieContext";
import { CookiePageProvider } from "./application/context/CookiePageContext";
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
    <CookiePageProvider>
      <CookieProvider>
      <CookiePage
          themeConfig={themeConfig}
        />
      </CookieProvider>
      
    </CookiePageProvider>

      
    </>
  )
}

export default App;
