import React from 'react'

import { ITreeNode } from '../../utils/parsePaths'
import TreeNode from '../TreeNode'

interface ITreeProps {
  data: ITreeNode[]
}

const Tree: React.FC<ITreeProps> = ({ data }) => {
  return (
    <>
      {data.map((node) => (
        <TreeNode key={node.name} node={node} />
      ))}
    </>
  )
}

export default Tree
