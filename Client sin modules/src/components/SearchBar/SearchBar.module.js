import styled from "styled-components"

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 6px;
  border: none;
  margin-top: 8px;
  margin-right: 16px;
  font-size: 17px;
  top:10px;
  

`

export const NuevoInput = styled.input`
width: 256px;

padding: 1em;
::placeholder {
  color: deepPink;
  font-size: 1.2em;
  font-style: italic;
}
`

export const SearchButton = styled.button`
width: 256px;

padding: 1em;
background-color: green
&:hover {
  background-color: limeGreen;
}
&:active {
  color: limeGreen;
}
`