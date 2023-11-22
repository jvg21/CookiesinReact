import { CookieController } from "./application/controller/cookiecontroller/CookieController";
import { CookieThemeConfig } from "./application/model/cookiethemeconfig/CookieThemeConfig";
import { CookiePage } from "./presentation/components/cookiepage/CookiePage";
import Cookies from 'js-cookie';

function App() {

  const themeConfig = new CookieThemeConfig();
  themeConfig.backgroundColor = '#EFEFEF';
  themeConfig.primaryAccentColor = '#EBAF24';
  themeConfig.hoverPrimaryAccendColor = '#FFAA00';
  themeConfig.backgroundCardColor = '#242424';
  themeConfig.primaryTextColor = '#464646';
  themeConfig.secondaryTextColor = '#000';

  let activeCookiePage = true;
  let cookiecontroller = new CookieController();


 for(let category of cookiecontroller.getListarCookies()){
    for(let cookie of category.cookies){
      if(Cookies.get(cookie.name)){
        activeCookiePage = false;
      }
    }
 }
  // console.log(cookiecontroller.getListarCookies());
  // console.log(activeCookiePage);
  return (
    <>
    
      <CookiePage
        cookieController={cookiecontroller}
        state={activeCookiePage}
        themeConfig={themeConfig}
      />
    </>
  )
}

export default App;
