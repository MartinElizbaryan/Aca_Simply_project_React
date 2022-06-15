import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function AddButton({ onClick }) {
  return (
    <Fab color="primary" aria-label="add" size="small">
      <AddIcon onClick={onClick} />
    </Fab>
  )
}
