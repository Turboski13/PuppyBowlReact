const cohortName = "2405-ftb-et-web-pt";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;


const SinglePlayer = () => {
  const [player, setPlayer] = useState([]) 
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchPlayer = async (playerId) => {
      const playerData = await PuppyBowlApi();
      setPlayer(playerData);
  };
  fetchPlayer();
  }, []);

  
  return (
    <div>
    {
        player.map((player)=>{
            return (
                <div>
                    <h4>{player.name}</h4>
                    <h4>{player.breed}</h4>
                    <h4>{player.status}</h4>
                    <h4>{player.teamID}</h4>
                    <img src={player.imageUrl} alt="{player.name}" />
                </div>
            )
        })
    }
</div>
    );
  }


  