'use client';

import path from 'path';
import Link from 'next/link';
import { Box, Drawer } from '@mui/material';
import { TreeItem, TreeView } from '@mui/x-tree-view';
import { DirectoryItem } from '../data/model/directory-item';
import { removeFileExtension } from '../data/util';

export function NavigationMenu({ params }: { params: DirectoryItem[] }) {
  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
      }}
    >
      <Drawer
        open
        variant="permanent"
        PaperProps={{
          sx: {
            zIndex: 0,
            marginTop: '100px',
            bgcolor: 'transparent',
            borderRightStyle: 'none',
          },
        }}
      >
        <TreeView aria-label="file system navigator">{params.map(renderTree)}</TreeView>
        <Box sx={{ flexGrow: 1 }} />
      </Drawer>
    </Box>
  );
}

function renderTree(item: DirectoryItem): JSX.Element {
  if (item.type === 'file') {
    return (
      <Link href={`/${path.relative('resources', removeFileExtension(item.id))}?query=read`} key={''}>
        <TreeItem nodeId={item.id} label={item.name} />
      </Link>
    );
  } else {
    return (
      <TreeItem nodeId={item.id} label={item.name} key={item.id}>
        {item.children?.map(renderTree)}
      </TreeItem>
    );
  }
}
