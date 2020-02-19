import React, {Component} from "react";
import "../HeaderDropdown/HeaderDropdown.styles.css";
import $ from "jquery";

class HeaderDropdown extends Component{

    constructor() {
        super();
        this._handleClick = this._handleClick.bind(this);
    }

    componentDidMount() {
        this._handleClick();
    }
    
    _handleClick = () => {
        $('.headerDropdown').click(function(e){
            $('.inercountry').removeClass("dropMenuOpen");
            $(this).next('.inercountry').addClass("dropMenuOpen");
            e.stopPropagation();

            $(".inercountry").click(function(e){
                e.stopPropagation();
            });
            
            $(document).click(function(e){
                e.stopPropagation();
                $('.inercountry').removeClass("dropMenuOpen");
            });
        });
    }

    render(){
        return (
            <div className="header_dropdown_wrap">
                <div className="headerDropdown countryouter" id="">{this.props.dropdownName}</div>
                <div className="inercountry">
                    <a href="/"><span>FAQ</span></a>
                </div>
            </div>
        )
    }

}

export default HeaderDropdown;