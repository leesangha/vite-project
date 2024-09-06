import "./App.css";
import { KBORanks } from "./statics/kbo-rank";

function App() {
  return (
    <div>
      <table className="rank-table">
        <thead>
          <tr>
            <td>순위</td>
            <td>팀명</td>
            <td>경기</td>
            <td>승</td>
            <td>패</td>
            <td>무</td>
            <td>승률</td>
            <td>게임차</td>
          </tr>
        </thead>
        <tbody>
          {KBORanks.map((team, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{team.name}</td>
                <td>{team.games}</td>
                <td>{team.win}</td>
                <td>{team.lose}</td>
                <td>{team.draw}</td>
                <td>{team.winningPercentage}</td>
                <td>{team.gameDiff}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
