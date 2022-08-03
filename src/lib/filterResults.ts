interface FilterResultsProps {
  mainList: unknown[] | undefined;
  filter: string;
  setAction: (actions: any[]) => void;
}
export function filterResults({
  mainList,
  filter,
  setAction,
}: FilterResultsProps) {
  if (mainList && mainList.length > 0) {
    const regExp = new RegExp(/[\u0300-\u036f]/, 'gi');
    const results = mainList.filter((item) =>
      JSON.stringify(item)
        .toLowerCase()
        .normalize('NFD')
        .replace(regExp, '')
        .includes(filter.toLowerCase().normalize('NFD').replace(regExp, ''))
    );
    setAction(results);
  }
}
