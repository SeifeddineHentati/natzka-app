interface ITreeNode {
  name: string
  children: ITreeNode[]
}

const parsePaths = (paths: string[]): ITreeNode[] => {
  const root: ITreeNode = { name: '', children: [] }

  const nodeMap: Record<string, ITreeNode> = { '': root }

  paths.forEach((path) => {
    const parts = path.split('/').filter(Boolean)
    let currentPath = ''
    let currentNode = root

    parts.forEach((part) => {
      currentPath += `/${part}`
      if (!nodeMap[currentPath]) {
        const newNode: ITreeNode = { name: part, children: [] }
        currentNode.children.push(newNode)
        nodeMap[currentPath] = newNode
      }
      currentNode = nodeMap[currentPath]
    })
  })

  return root.children
}

export type { ITreeNode }
export { parsePaths }
