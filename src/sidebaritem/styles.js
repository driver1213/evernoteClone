const styles = theme => ({
  listItem: {
    cursor: 'pointer'
  },
  textSection: {
    maxWidth: '85%',
    '&:hover':{
      color: '#4caf50'
    }
  },  
  deleteIcon: {
    position: 'absolute',
    right: '5px',
    top: 'calc(50% - 15px)',
    '&:hover': {
      color: 'red'
    }
  }
});

export default styles;