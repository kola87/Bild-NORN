import React, {Component} from 'react';

class HeaderMainMenu extends Component{
    render (){
        return(
            console.log('items', this.props.items),
            <div>
                {this.props.items.map((item, index)=>
                   <a href={item.link} key={index}>{item.label}</a>
                    )}
            </div>
        )

    }
}
export default HeaderMainMenu;