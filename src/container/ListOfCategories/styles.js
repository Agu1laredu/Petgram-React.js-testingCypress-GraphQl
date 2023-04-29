import styled, { css } from 'styled-components'
import { bounceDown } from '../../styles/animation'

export const List = styled.ul`
    display: flex;
    overflow: scroll;
    width: 100%;
    padding: 0;
    &::-webkit-scrollbar {
    display: none;
    }
    ${props => props.fixed && css`
        ${bounceDown()}
        background: #fff;
        border-radius: 60px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        position: fixed;
        margin: 0 auto;
        top: -20px;
        left: 0;
        right: 0;
        max-width: 400px;
        padding: 5px;
        transform: scale(.5);
        z-index: 1;`}
`
export const Item = styled.li`
    padding: 0 8px;
`
export const LoaderWrapperListCategories = styled.div`
    position: absolute;
    top: 40px;
    margin: 10px 0 10px 20px;
`
