import styled from 'styled-components';

const HrefGroup = styled.div`
background-color: transparent;
border: 0px;
padding: 10px 20px;
`

const Href1 = styled.a`
color: #1976d2;
background-color: transparent;
border: 0px solid;
border-right: 1px solid #1976d2;
text-decoration: underline;
text-decoration-color: black;
padding-right: 8px;
margin: 4px;
`

const Href2 = styled.a`
color: #1976d2;
background-color: transparent;
border: 0px solid;
text-decoration: underline;
text-decoration-color: black;
margin: 0px;
`

export default function ButtonFooter() {
    return (
        
            <HrefGroup>
                <Href1 href='https://twitter.com/?lang=it' target='_blank'>TWITTER</Href1>
                <Href2 href='http://it-it.facebook.it/' target='_blank'>FACEBOOK</Href2>
            </HrefGroup>
        


    );
}



