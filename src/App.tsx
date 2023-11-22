import { CookieController } from "./application/controller/cookiecontroller/CookieController";
import { CookieThemeConfig } from "./application/model/cookiethemeconfig/CookieThemeConfig";
import { CookiePage } from "./presentation/components/cookiepage/CookiePage";
import CookieJson from './infrastructure/services/cookies.json';
import { CookieInfo } from "./application/model/cookieInfo/CookieInfo";
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
  let cookieInfo : CookieInfo[] = [];
  CookieJson.map((x)=>{
    cookieInfo.push(new CookieInfo(x.id,x.name,x.descriptions,x.expireTime));
    if(Cookies.get(x.name)){
      activeCookiePage = false;
    }
  })

  return (
    <>
      <CookiePage
        cookieController={cookiecontroller}
        state={activeCookiePage}
        themeConfig={themeConfig}
        cookieInfo = {cookieInfo}
      />
    </>
  )
}

export default App;
