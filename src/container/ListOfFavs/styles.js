import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Link = styled(LinkRouter)`
    border-radius: 8px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .3);
    display: inline-block;
    margin: 1%;
    margin-right: 3px;
    overflow: hidden;
    position: relative;
    width: 31.33%;
    &:after {
        content: '';
        display: block;
        padding-bottom: 100%
    }
`

export const Grid = styled.div`
    padding: 18px;
`

export const Image = styled.img`
    object-fit: cover;
    height: 100%;
    width: 100%;
    position: absolute;
`

export const Title = styled.h2`
    margin-left: 20px;
    font-size: 20px;
    color: #595759;
    text-shadow: 2px 1px 20px rgba(150, 150, 150, 0.5);
`
