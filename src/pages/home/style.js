import styled from 'styled-components'

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
  background: skyblue;
`
export const HomeLeft = styled.section`
  float: left;
  width: 600px;
  margin-left: 15px;
  padding-top: 30px;
`
export const BannerWrapper = styled.div`
  overflow: hidden;
  width: 625px;
  height: 240px;
  background-color: purple;
  .banner {
    width: 300%;
    height: 100%;
    display: inline-block;
    vertical-align: top;
    background-color: red;
    .item {
      width: 625px;
      height: 240px;
      line-height: 240px;
      text-align: center;
    }
  }
`
export const BannerItem = styled.div``

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
`
export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  font-size: 14px;
  color: #000;
`
export const HomeRight = styled.section`
  float: right;
  width: 240px;
  height: 100px;
  background: pink;
`
