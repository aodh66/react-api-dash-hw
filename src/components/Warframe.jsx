import { useState } from "react";

function Warframe() {
    const endpointArbi = `https://api.warframestat.us/pc/arbitration/`;
    const endpointSortie = `https://api.warframestat.us/pc/sortie/`;
    const endpointPlains = `https://api.warframestat.us/pc/cetusCycle/`;
    const endpointOrb = `https://api.warframestat.us/pc/vallisCycle/`;
    const endpointCambion = `https://api.warframestat.us/pc/cambionCycle/`;
    const [arbi, setArbi] = useState({enemy: 'Enemy', type: 'Mission Type'});
    const [sortie, setSortie] = useState(null);
    const [plains, setPlains] = useState({ state: 'Time', shortString: 'Time till change' });
    const [orb, setOrb] = useState({ state: 'Heat Level', shortString: 'Time till change' });
    const [cambion, setCambion] = useState({ state: 'Cycle State', timeLeft: 'Time till change' });
  
    async function warframeCall() {
        try {
            const apiCall = await fetch(endpointArbi);
            if (!apiCall.ok) throw apiCall;
            const data = await apiCall.json();
            const { enemy, type } = data;
            setArbi({ enemy: enemy, type: type })
          } catch (err) {
            console.log(err);
          }
        
        
          try {
            const apiCall = await fetch(endpointSortie);
            if (!apiCall.ok) throw apiCall;
            const data = await apiCall.json();
            const { boss } = data;
            setSortie(boss)
          } catch (err) {
            console.log(err);
          }
        
        
          try {
            const apiCall = await fetch(endpointPlains);
            if (!apiCall.ok) throw apiCall;
            const data = await apiCall.json();
            const { state, shortString } = data;
            setPlains({ state, shortString })
          } catch (err) {
            console.log(err);
          }
        
        
          try {
            const apiCall = await fetch(endpointOrb);
            if (!apiCall.ok) throw apiCall;
            const data = await apiCall.json();
            const { state, shortString } = data;
            setOrb({ state, shortString })
          } catch (err) {
            console.log(err);
          }
        
        
          try {
            const apiCall = await fetch(endpointCambion);
            if (!apiCall.ok) throw apiCall;
            const data = await apiCall.json();
            const { state, timeLeft } = data;
            setCambion({ state, timeLeft })
          } catch (err) {
            console.log(err);
          }
        }

        return (
            <div className="column-section warframe-section">
            <div className="section-title">Warframe</div>
            <div className="warframe-subsection">
                <p className="section-subtitle arbitration-title">Arbitration</p>
                <p className="section-data arbi-info">Mission Type: {arbi.enemy} {arbi.type}</p>
            </div>
            <div className="warframe-subsection">
                <p className="section-subtitle sortie-title">Sortie</p>
                <p className="section-data sortie-boss">Sortie Boss: {sortie}</p>
            </div>
            <div className="warframe-subsection">
                <p className="section-subtitle plains-title">Plains of Eidolon</p>
                <p className="section-data plains-cycle">Day Night Cycle: {plains.state.toUpperCase()}, {plains.shortString}</p>
            </div>
            <div className="warframe-subsection">
                <p className="section-subtitle orb-title">Orb Vallis</p>
                <p className="section-data orb-cycle">Heat Cycle: {orb.state.toUpperCase()}, {orb.shortString}</p>
            </div>
            <div className="warframe-subsection">
                <p className="section-subtitle cambion-title">Cambion Drift</p>
                <p className="section-data cambion-cycle">Cycle: {cambion.state.toUpperCase()}, {cambion.timeLeft}</p>
            </div>
                <button onClick={warframeCall}>Get Warframe Worldstate</button>
        </div>
        )
}
    export default Warframe