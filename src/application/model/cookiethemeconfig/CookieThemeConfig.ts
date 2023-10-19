export class CookieThemeConfig {

    private _primaryAccentColor: string = '';
    private _hoverPrimaryAccendColor: string = '';
    private _backgroundColor: string = '';
    private _backgroundCardColor: string = '';
    private _primaryTextColor: string = '';
    private _secondaryTextColor: string = '';

    get primaryAccentColor() {
      return this._primaryAccentColor
    }
    
    set primaryAccentColor(val: string) {
      this._primaryAccentColor = val
    }
    
    get hoverPrimaryAccendColor() {
      return this._hoverPrimaryAccendColor
    }
    
    set hoverPrimaryAccendColor(val: string) {
      this._hoverPrimaryAccendColor = val
    }
    
    get backgroundColor() {
      return this._backgroundColor
    }
    
    set backgroundColor(val: string) {
      this._backgroundColor = val
    }
    
    get backgroundCardColor() {
      return this._backgroundCardColor
    }
    
    set backgroundCardColor(val: string) {
      this._backgroundCardColor = val
    }
    
    get primaryTextColor() {
      return this._primaryTextColor
    }
    
    set primaryTextColor(val: string) {
      this._primaryTextColor = val
    }
    
    get secondaryTextColor() {
      return this._secondaryTextColor
    }
    
    set secondaryTextColor(val: string) {
      this._secondaryTextColor = val
    }


}