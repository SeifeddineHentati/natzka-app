import React, { useState } from 'react'

import { ITreeNode } from '../../utils/parsePaths'
import {
  ArrowIcon,
  ChildContainer,
  HorizontalLine,
  NodeContainer,
  NodeLabel,
  NodeText,
  VerticalLine,
} from './styles'

interface ITreeNodeProps {
  node: ITreeNode
}

const TreeNode: React.FC<ITreeNodeProps> = ({ node }) => {
  const [expanded, setExpanded] = useState(false)

  const handleExpand = () => {
    if (node.children.length > 0) {
      setExpanded(!expanded)
    }
  }

  return (
    <NodeContainer>
      {node.children.length > 0 && <VerticalLine />}
      <HorizontalLine />
      <NodeLabel onClick={handleExpand} hasChildren={node.children.length > 0}>
        {node.children.length > 0 && (
          <ArrowIcon expanded={expanded}>▶</ArrowIcon>
        )}
        <NodeText>{node.name}</NodeText>
      </NodeLabel>

      {expanded && node.children.length > 0 && (
        <ChildContainer>
          {node.children.map((child) => (
            <TreeNode key={child.name} node={child} />
          ))}
        </ChildContainer>
      )}
    </NodeContainer>
  )
}

export default TreeNode
