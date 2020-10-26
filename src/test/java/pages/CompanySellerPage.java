package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class CompanySellerPage {

    public CompanySellerPage() {
        PageFactory.initElements(Driver.getDriver(),this);
    }
    @FindBy(xpath = "//i[@class='fa fa-user']" )
    public WebElement JoinSeller;
    @FindBy(id = "vender_type1")
    public WebElement CompanySeller;
    @FindBy(xpath = "//input[@id='company_name']")
    public WebElement CompanyName;
    @FindBy(xpath = "//input[@id='company_mobile']")
    public WebElement CompanyMobile;
    @FindBy(xpath = "//textarea[@id='company_address']")
    public WebElement CompanyAddress;
    @FindBy(xpath = "//input[@id='vender_name']")
    public WebElement Name;
    @FindBy(xpath = "//input[@id='email']")
    public WebElement Email;
    @FindBy(xpath = "//input[@id='sub_domain']")
    public WebElement SubDomain;
    @FindBy(xpath = "//input[@id='vender_mobile']")
    public WebElement MobileNumber;
    @FindBy(xpath = "//select[@name='country']")
    public WebElement Country;
    @FindBy(xpath = "//input[@id='select_state']")
    public WebElement State;
    @FindBy(xpath = "//input[@id='select_city']")
    public WebElement City;
    @FindBy(xpath = "//textarea[@id='vender_address']")
    public WebElement Address;
    @FindBy(xpath = "//input[@id='zip_code_input']")
    public WebElement PostalCode;
    @FindBy(xpath = "//select[@name='category']")
    public WebElement Categories;
    @FindBy(xpath = "//input[@id='password']")
    public WebElement Password;
    @FindBy(xpath = "//button[@class='btn btn-lg btn-warning']")
    public WebElement Registration;

}
