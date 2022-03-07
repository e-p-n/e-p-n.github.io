import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index"; 




function Thumbnail({thumbnail, portItem}) {
    const {name, project_type, client} = thumbnail;

    const selectItem = useSelector((state) =>  state.selectPortfolio);


    const dispatch = useDispatch();

    const {selectPort} = bindActionCreators(actionCreators, dispatch);

    return (
    
        <div className={`thumbnail ${selectItem === portItem && 'thumbSelected'}`} onClick={() =>  selectPort(portItem)} id={name.toLowerCase().replace(/\s/g, '')}>


            <div className="thumbnailImg">
                <img src={require(`../../assets/images/thumbnails/${name.toLowerCase().replace(/\s/g, '')}.png`)} alt=""/>
            </div>
            <div className="description">
                <h4>{name}: <span className="normal">{project_type}</span></h4>
                <p>{client}</p>
            </div>
        </div>
    )

}

export default Thumbnail;