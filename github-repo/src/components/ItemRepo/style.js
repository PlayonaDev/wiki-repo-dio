import styled from "styled-components";

export const ItemContainer = styled.div`
 display: flex;
 flex-direction: column;
 width: 80%;
 padding: 16px 0px 16px 0px;
 
 h3 {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
  font-size: 25px;
  color: #FAFAFA;
 }
 p {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 13px;
  color: #FAFAFA60;
  margin: 10px 0px 10px 0px;
 }

 a {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 13px;
  color: #FAFAFA;
  text-decoration: none;
 }

 a.remover {
  width: 60px;
  padding: 5px 3px 5px 3px;
  margin: 10px 0 10px 0;

  border: 1px solid #FAFAFA;
  border-radius: 20px;

  font-size: 13px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  align-items: center;
  text-align: center;
  text-decoration: none;
  
  color: #FAFAFA;
  background-color: #c63637;
  &:hover {
    font-weight: 600;
    background-color: #FAFAFA;
    color: #c63637;
    border: 1px solid #c63637;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
 }

 hr {
  color:#FAFAFA60;
 }

`