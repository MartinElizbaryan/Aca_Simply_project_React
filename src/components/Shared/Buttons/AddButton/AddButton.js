import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function AddButton() {
  return (
    <Fab color="primary" aria-label="add" size="small">
      <AddIcon />
    </Fab>
  )
}
