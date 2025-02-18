import { Cell } from '~/_components/cell';
import { Label } from '~/_components/label';
import { generateColumns } from '~/_helpers';

const SIZE = 10;

export function Main() {
  const rows = Array.from({ length: SIZE + 1 }).map((_, index) => index);
  const columns = generateColumns(SIZE);

  return (
    <main className="flex flex-col">
      <div className="flex flex-col">
        {rows.map((rowLabel, index) => {
          if (index === 0) {
            return (
              <div className="flex">
                <Label bulk />
                {columns.map((colLabel) => (
                  <Label key={colLabel}>{colLabel}</Label>
                ))}
              </div>
            );
          }

          return (
            <div className="flex">
              <Label key={rowLabel}>{rowLabel}</Label>
              {columns.map((colLabel) => (
                <Cell key={colLabel} />
              ))}
            </div>
          );
        })}
      </div>
    </main>
  );
}
