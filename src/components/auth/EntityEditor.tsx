  import React, { ChangeEvent } from 'react';
  import { Card, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';

  interface Entity {
    title: string;
    description: string;
    type: string;
  }

  interface InputFieldProps {
    entity: Entity;
    onChange: (updatedEntity: Entity) => void;
  }

  const entityTypes = ["Monster", "Spell", "Item", "Character", "Location", "Encounter", "Campaign"];
  const EntityEditor: React.FC<InputFieldProps> = ({ entity, onChange }) => {

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      onChange({ ...entity, [name]: value });
    };

    const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
      onChange({ ...entity, description: event.target.value });
    };

    const handleTypeChange = (event: SelectChangeEvent) => {
      onChange({ ...entity, [event.target.name]: event.target.value});
    };

    return (
      <Card sx={{
        padding: '1rem',
        width: '100%',
        '@media (min-width: 600px)': {
          width: '50%',
        },
        '@media (min-width: 1280px)': {
          width: '650px',
        },
        }}>
        <TextField
          className="mb-2"
          label="Title"
          name="title"
          value={entity.title}
          onChange={handleChange}
        />
        <FormControl className="mb-2 ml-">
          <InputLabel id="demo-simple-select-label">Entity Type</InputLabel>
          <Select        
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={entity.type}
            label="Type"
            name="type"
            onChange={handleChange}
          >
            {entityTypes.map((type) => (
              <MenuItem key={type} value={type}>{type}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          className="w-full"
          label="Description"
          name="description"
          multiline
          rows={4}
          value={entity.description}
          onChange={handleChange}
        />
      </Card>
    );
  };

  export default EntityEditor;