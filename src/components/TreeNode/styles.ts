import styled from 'styled-components'
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../constants'

export const NodeContainer = styled.div`
  margin-bottom: 10px;
  margin-top: 10px;
  position: relative;
`

export const NodeLabel = styled.div<{
  hasChildren: boolean
}>`
  cursor: ${(props) => (props.hasChildren ? 'pointer' : 'default')};
  display: flex;
  align-items: center;
  font-size: 18px;
  font-family: Arial, sans-serif;
  margin-left: ${(props) => (props.hasChildren ? '0' : '40px')};

  span {
    background-color: ${PRIMARY_COLOR};
    color: ${SECONDARY_COLOR}88;
  }

  &:hover span {
    background-color: ${PRIMARY_COLOR};
    color: ${SECONDARY_COLOR};
  }
`

export const ArrowIcon = styled.div<{ expanded: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  transition: transform 0.2s;
  transform: rotate(${(props) => (props.expanded ? '90deg' : '0deg')});
  margin-right: 8px;
  font-size: 16px;

  color: ${PRIMARY_COLOR};
  white-space: nowrap;
  text-shadow: ${SECONDARY_COLOR} 1px 0 1px;
`

export const NodeText = styled.span`
  text-decoration: none;
  height: 20px;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  box-shadow:
    0 2px 4px 0 rgba(0, 0, 0, 0.2),
    0 3px 10px 0 rgba(0, 0, 0, 0.19);
`

export const ChildContainer = styled.div`
  margin-left: 16px;
  position: relative;
  padding-left: 18px;
`
export const HorizontalLine = styled.div`
  position: absolute;
  width: 59px;
  height: 20px;
  top: 0px;
  left: 0px;
  border-bottom: 1px dotted ${SECONDARY_COLOR};
  transform: translate(-18px, -0px);
`
export const VerticalLine = styled.div`
  position: absolute;
  height: calc(100% - 40px);
  top: 18px;
  left: 16px;
  border-left: 1px dotted ${SECONDARY_COLOR};
`
