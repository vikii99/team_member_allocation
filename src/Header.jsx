const header = ({selectedTeam, teamMemberCount}) => {
    return (
      <header className="container">
        <div className="row jsutify-content-center mt-3 mb-4">
          <div className="col">
            <h1>Team Member Allocation</h1>
            <h3>
              {selectedTeam} has {teamMemberCount} {teamMemberCount===1?"Member":"Members"}
            </h3>
          </div>
        </div>
      </header>
    );
}

export default header