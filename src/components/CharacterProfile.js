import React from 'react';
import { connect } from 'react-redux';

const CharacterProfile = ({ profile }) =>
  <div id='character-profile' className='col-sm-4'>
   {profile.name && <div className='card'>
   <h1>{profile.name}</h1>
    <hr></hr>
    {profile.height && <p><i>Height: </i>{profile.height}cm</p>}
	{profile.mass && <p>Weight: {profile.mass}kg</p>}
    {profile.hair_color && <p><i>Hair Color: </i>{profile.hair_color}</p>}
    {profile.skin_color && <p><i>Skin Color: </i>{profile.skin_color}</p>}
    {profile.gender && <p><i>Gender: </i>{profile.gender}</p>}
    </div>
  }
  </div>;

const mapStateToProps = ({ character: { profile } }) => ({
  profile
});

export default connect(mapStateToProps)(CharacterProfile);