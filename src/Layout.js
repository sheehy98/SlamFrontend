export const layout = {
  app: {},

  tabList: {
    borderBottom: "1px solid #ccc",
    paddingLeft: "0",
    marginTop: 0,
  },

  tabListItem: {
    display: "inline-block",
    listStyle: "none",
    marginBottom: "-1px",
    padding: "0.5rem 1rem",
  },

  tabListActive: {
    display: "inline-block",
    listStyle: "none",
    marginBottom: "-1px",
    padding: "0.5rem 1rem",
    backgroundColor: "white",
    border: "solid #ccc",
    borderWidth: "1px 1px 0 1px",
  },

  lobbyInputs: {
    position: "absolute",
    display: "inline-block",
    width: "300px",
    left: "15px",
  },

  inputPair: {
    display: "grid",
    width: "300px",
    gridTemplateColumns: "120px auto",
  },

  inputLabel: {},

  inputInput: {},

  joinButton: {
    width: "100%",
  },

  lobbyPanel: {
    position: "absolute",
    right: "15px",
    width: "250px",
  },

  panelLabel: {
    display: "grid",
    width: "250px",
    gridTemplateColumns: "150px 100px",
  },

  td: {
    border: '1px black solid'
  },

  panelButton: {
  },

  winner: {
    position: 'absolute',
    top: '9%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '24px'
  },

  center: {
    position: 'absolute',
    top: '25%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'grid',
    width: '40%',
    gridTemplateColumns: 'auto auto auto auto'
  },

  hand: {
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, 0)',
    display: 'grid',
    width: '80%',
    gridTemplateColumns: 'auto auto auto auto auto auto auto auto auto auto auto auto auto'
  },

  flip: {
    position: 'absolute',
    top: '25%',
    left: '15%',
    width: '150px',
    height: '40px',
    borderRadius: '5%',
    border: '1px solid #eee',
    backgroundColor: '#eee',
    lineHeight: '40px',
    textAlign: 'center',
    fontSize: '25px',
    fontFamily: 'Verdana'
  },

  card: {
    width: '100px',
    height: '160px',
    borderRadius: '5%',
    border: '4px solid #aaa',
    backgroundColor: '#ccc',
    margin: 'auto',
    lineHeight: '160px',
    textAlign: 'center',
    fontSize: '40px',
    fontFamily: 'Verdana'
  },

  smallCard: {
    border: '4px solid #aaa',
    width: '50px',
    height: '80px',
    borderRadius: '5%',
    backgroundColor: '#ccc',
    lineHeight: '80px',
    textAlign: 'center',
    fontSize: '30px',
    fontFamily: 'Verdana',
    margin: 'auto',
    marginTop: '8px',
    marginBottom: '8px'
  },

  selected: {
    border: '4px dashed #aaa',
    width: '50px',
    height: '80px',
    borderRadius: '5%',
    backgroundColor: '#ccc',
    lineHeight: '80px',
    textAlign: 'center',
    fontSize: '30px',
    fontFamily: 'Verdana',
    margin: 'auto',
    marginTop: '8px',
    marginBottom: '8px'
  },

  placeHolder: {
    width: '58px',
    height: '88px',
    borderRadius: '5%',
    margin: 'auto',
    marginTop: '8px',
    marginBottom: '8px'
  },

  popup: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '24px'
  }
};
