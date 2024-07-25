import React, { useMemo } from 'react'

import { parsePaths, ITreeNode } from './utils/parsePaths'
import { useTranslation } from 'react-i18next'
import Tree from './components/Tree'
import styled from 'styled-components'
import { SECONDARY_COLOR } from './constants'

const Title = styled.h1`
  font-family: Arial, sans-serif;
  color: ${SECONDARY_COLOR};
`
interface IAppProps {
  paths: Array<string>
}

const App: React.FC<IAppProps> = ({ paths }) => {
  const { t } = useTranslation()

  const treeData: ITreeNode[] = useMemo(() => {
    return parsePaths(paths)
  }, [paths])

  return (
    <>
      <Title>{t('home.directory.tree')}</Title>
      <Tree data={treeData} />
    </>
  )
}

export default App
