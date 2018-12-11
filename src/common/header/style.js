import styled from 'styled-components'
import navLogoPic from '../../static/navlogo.png'

export const HeaderWrapper = styled.div`
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 58px;
  background: url(${navLogoPic}) no-repeat center/contain;
`

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding-right: 70px;
  box-sizing: border-box;
`
export const NavItem = styled.div`
  padding: 0 15px;
  line-height: 58px;
  font-size: 17px;
  color: #333;
  cursor: pointer;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
  &.download {
    &:hover {
      background-color: #f5f5f5;
    }
  }
`

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .search {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 50%;
    text-align: center;
    cursor: pointer;
    &.focused {
      background-color: #777;
      color: #fff;
    }
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  padding: 0 30px 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  border: none;
  outline: none;
  border-radius: 19px;
  background-color: #eee;
  box-sizing: border-box;
  font-size: 14px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }

  &.slide-enter {
    transition: all 0.3s ease-in;
  }
  &.slide-enter-active {
    width: 240px;
  }

  &.slide-exit {
    transition: all 0.3s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`
export const SearchRecommend = styled.div`
  position: absolute;
  top: 56px;
  left: 0;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  background: #fff;
`
export const SearchRecommendTitle = styled.p`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`
export const SearchRecommendSwitch = styled.span`
  position: relative;
  float: right;
  font-size: 13px;
  cursor: pointer;
  &:hover {
    color: #2f2f2f;
  }
  .spin {
    float: left;
    margin-right: 6px;
    font-size: 12px;
    transition: all 0.3s ease-in;
    transform: rotate(0deg);
  }
  &::before {
    position: absolute;
    content: '';
    top: -10px;
    right: -20px;
    bottom: -10px;
    left: -20px;
  }
`
export const SearchRecommendItem = styled.div`
  float: left;
  margin-right: 10px;
  margin-bottom: 15px;
  line-height: 20px;
  padding: 0 5px;
  border: 1px solid #ddd;
  border-radius: 3px;
  color: #787878;
  font-size: 12px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    border-color: #b4b4b4;
    color: #333;
  }
`
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`
export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 15px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  cursor: pointer;
  &.reg {
    color: #ec6149;
    &:hover {
      color: #ec6149;
      border-color: #ec6149;
      background-color: rgba(236, 97, 73, 0.05);
    }
  }
  &.writting {
    color: #fff;
    background-color: #ec6149;
  }
`
