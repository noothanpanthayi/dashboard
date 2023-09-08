

const TextInput = React.memo(({row,element}:{row:any,element:string}) => {
    return (
      <span>
        <input
          onKeyUp={handleEnter}
          onChange={updateRow}
          onFocus={useCallback((e:any) => e.target.select(),[])}
          autoFocus
          data-name={`${element}`}
          type="text"
          value={row['skill']}
        />
      </span>
    )
  });