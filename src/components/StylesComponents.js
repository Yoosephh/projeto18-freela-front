import { styled } from "styled-components";

export const BasicText = styled.div`
  font-family: 'Bricolage Grotesque', sans-serif;
  font-style: normal;
  line-height: normal;
`
export const PageTitle = styled(BasicText) `
  text-align: center;
  margin: 30px 0 20px 0;
  font-weight: 700;
  font-size: 23px;
`

export const ServiceTitle = styled(BasicText) `
  font-weight: 500;
  font-size: 18px;
`

export const ServiceDescription = styled(BasicText)`
  font-weight:400;
  font-size: 16px;
`

export const ServicePrice = styled(ServiceDescription)`
  text-align: end;
  padding-right: 15px;
`

export const Page = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  height: 100vh;
  position: relative;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: center;
  button {
    background-color: transparent;
    border-radius: 5px;
    padding: 7px;
    width: fit-content;
    color:#eaaa00;
  }
`