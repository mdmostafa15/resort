import Styled from "styled-components";
import defaultBgImg from "../images/room-1.jpeg";

const StyleSingleRoomHero = Styled.header`
    min-height: 60vh;
    background: url(${(props)=>props.img?props.img:defaultBgImg}) center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default StyleSingleRoomHero;
