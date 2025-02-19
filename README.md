# Excel-like Grid with React

🔥 [Live Demo](https://excel-test.mamikonyan.io/)

A performant, virtualized spreadsheet implementation built with React. Features Excel-style column naming (A-Z, AA-ZZ), formula calculations, and local storage persistence.

## Features

### Grid Virtualization
- Handles large datasets (10K x 10K cells) efficiently
- Only renders visible cells in viewport
- Smooth scrolling with overscan support
- Memory-efficient implementation

### Excel-like Features
- Excel-style column naming (A-Z, AA-ZZ, etc.)
- Formula support (e.g., `A1=A2+A3`)
- Basic arithmetic operations (+, -, *, /)
- Cell references in formulas
- Error handling for invalid formulas

### Data Management
- Persistent storage using localStorage
- Efficient sparse data structure
- Handles numerical values
- Browser-compatible storage implementation

## Components

### Cell Component
```typescript
<Cell cellIndex="A1" style={{ /* ... */ }} />
```
- Displays cell reference in top-left corner
- Validates numerical input
- Persists data to localStorage
- Custom styling support

### FormulaRow Component
```typescript
<FormulaRow />
```
- Formula input interface
- Supports Excel-like formulas
- Validates formula syntax
- Performs calculations
- Error handling and display

### Grid Virtualization
- Uses custom virtualization implementation
- Supports both row and column virtualization
- Configurable overscan for smooth scrolling
- Memory-efficient viewport rendering

## Data Structure

### Cell Storage
```typescript
// Cell value storage format
{
  "A1": "123",
  "B2": "456",
  // ...
}
```

### Column Generation
- Implements Excel-style column naming
- Supports unlimited columns (A-Z, AA-ZZ, AAA-ZZZ, etc.)
- Sequential generation based on index

## Usage

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
```

## Implementation Details

### Column Names Generation
```typescript
generateColumns(size: number): string[]
```
Generates Excel-style column names:
- A, B, C, ... Z
- AA, AB, AC, ... AZ
- BA, BB, BC, ... BZ
- etc.

### Data Persistence
```typescript
getCellInfo(cellIndex: string): string
setCellInfo(cellIndex: string, value: string): void
```
- Browser-safe localStorage implementation
- Handles SSR environments
- Efficient data structure

### Formula Processing
- Supports basic arithmetic operations
- Pattern matching using regex
- Error handling for:
    - Invalid formula syntax
    - Non-numeric values
    - Division by zero
    - Missing cell references

## Technical Stack

- React
- TypeScript
- Tailwind CSS
- localStorage for persistence

## Performance Considerations

- Virtualized rendering for large datasets
- Efficient data structure for sparse grids
- Optimized localStorage usage
- Minimal re-renders
- Responsive UI

## Future Improvements

- Support for more complex formulas
- Copy/paste functionality
- Undo/redo support
- Cell formatting options
- Export/import capabilities
- Multi-cell selection
- Cell range support in formulas

## Contributing

Feel free to submit issues and enhancement requests!

## License

[MIT License](LICENSE)