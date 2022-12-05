export const layout = {
  app: {},

  tabList: {
    borderBottom: "1px solid #ccc",
    paddingLeft: "0",
    marginTop: 0,
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    textAlign: 'center',
    fontSize: '20px'
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
    marginTop: "-1px",
    padding: "0.5rem 1rem",
    backgroundColor: "white",
    border: "solid #ccc",
    borderWidth: "1px 1px 0 1px",
  },

  tutorial: {
    position: 'absolute',
    top: '9%',
    left: '50%',
    transform: 'translate(-50%, 0)',
    width: '762px',
    height: '416px'
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
    height: '25px',
    gridTemplateColumns: "120px 180px",
    marginBottom: "10px",
  },

  inputLabel: {
    fontSize: '20px',
    fontFamily: 'verdana'
  },

  inputInput: {
    border: 'none',
    borderBottom: '2px solid black',
    fontSize: '20px',
    fontFamily: 'verdana'
  },

  joinButton: {
    width: "100%",
    height: '40px',
    border: '1px solid #eee',
    backgroundColor: '#ccc',
    fontFamily: 'verdana',
    fontSize: '20px'
  },

  lobbyPanel: {
    position: "absolute",
    right: "15px",
    width: "300px",
  },

  panelLabel: {
    display: "grid",
    width: "300px",
    gridTemplateColumns: "200px 100px",
    fontFamily: 'verdana',
    fontSize: '18px',
    marginBottom: '5px'
  },

  playerPair: {
    display: "grid",
    width: "300px",
    height: '25px',
    gridTemplateColumns: "200px 100px",
    fontFamily: 'verdana',
    fontSize: '18px',
    border: '2px solid black',
    marginBottom: '-2px'
  },

  td: {
    fontFamily: 'verdana',
    fontSize: '18px'
  },

  td2: {
    fontFamily: 'verdana',
    fontSize: '18px',
    textAlign: 'center'
  },

  panelButton: {
    width: '100%',
    height: '100%',
    border: '1px solid #eee',
    backgroundColor: '#ccc',
    fontFamily: 'verdana',
    fontSize: '18px'
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
    top: '75%',
    left: '50%',
    width: '80%',
    transform: 'translate(-50%, 0)',
    height: '150px',
    borderRadius: '5px',
    border: '1px solid #eee',
    backgroundColor: '#aaa',
    lineHeight: '150px',
    textAlign: 'center',
    fontSize: '50px',
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
