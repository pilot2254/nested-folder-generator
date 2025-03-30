# Nested Folder Generator

A customizable Node.js tool for generating nested folder structures with configurable patterns and depth.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## Overview

Nested Folder Generator creates hierarchical directory structures based on configurable patterns. It can generate binary trees (0/1), decimal trees (0-9), or any custom folder naming pattern you specify. The tool uses recursion to efficiently create deeply nested structures with minimal code.

## Features

- 🌲 Create deeply nested folder structures
- ⚙️ Highly configurable (folder names, depth, base directory)
- 📊 Performance statistics and folder count
- 🔄 Binary, decimal, or custom folder patterns
- 📝 Detailed logging options

## Installation

```bash
# Clone the repository
git clone https://github.com/pilot2254/nested-folder-generator.git

# Navigate to the project directory
cd nested-folder-generator

# No dependencies to install - just pure Node.js!
```

## Usage

### Basic Usage

```shellscript
# Run with default settings (binary tree, depth 3)
node create-folders.js
```

### Customizing the Configuration

Edit the `config` object in the script to customize the folder generation:

```javascript
// Example: Modify the config object in create-folders.js
const config = {
  // Array of folder names to create at each level
  folderNames: ['0', '1'],  // Change this array to customize folder names
  
  // Maximum depth of nesting
  nestingDepth: 3,          // Increase for deeper structures
  
  // Base directory where folders will be created
  baseDir: './binary_tree_folders',
  
  // Whether to log each folder creation
  verbose: true,
  
  // Whether to show a summary at the end
  showSummary: true
};
```

## Configuration Options

| Option | Type | Description | Default
|-----|-----|-----|-----
| `folderNames` | Array | Names of folders to create at each level | `['0', '1']`
| `nestingDepth` | Number | How many levels deep to create folders | `3`
| `baseDir` | String | Base directory where folders will be created | `'./binary_tree_folders'`
| `verbose` | Boolean | Whether to log each folder creation | `true`
| `showSummary` | Boolean | Whether to show statistics at the end | `true`


## Examples

### Binary Tree (0/1)

```javascript
const config = {
  folderNames: ['0', '1'],
  nestingDepth: 3,
  baseDir: './binary_tree'
};
```

Creates a structure like:

```plaintext
binary_tree/
├── 0/
│   ├── 0/
│   │   ├── 0/
│   │   └── 1/
│   └── 1/
│       ├── 0/
│       └── 1/
└── 1/
    ├── 0/
    │   ├── 0/
    │   └── 1/
    └── 1/
        ├── 0/
        └── 1/
```

### Decimal Tree (0-9)

```javascript
const config = {
  folderNames: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  nestingDepth: 2,
  baseDir: './decimal_tree'
};
```

Creates 10 top-level folders, each containing 10 subfolders (100 folders total).

### Custom Named Folders

```javascript
const config = {
  folderNames: ['images', 'documents', 'videos'],
  nestingDepth: 2,
  baseDir: './media_tree'
};
```

Creates a structure for organizing media files with categories and subcategories.

## Use Cases

- **Testing File Systems**: Test how file systems handle large numbers of nested directories
- **Data Structure Visualization**: Visualize tree data structures physically
- **Test Data Generation**: Create folder structures for testing applications
- **Educational Purposes**: Demonstrate recursion and tree structures
- **Benchmarking**: Test file system performance with different folder structures


## Technical Details

- Written in pure Node.js with no external dependencies
- Uses recursion for efficient folder creation
- Handles error cases gracefully
- Provides performance metrics


## Performance Considerations

- Be careful with large depth values as the number of folders grows exponentially
- For binary trees (0/1), depth 10 would create over 2,000 folders
- For decimal trees (0-9), depth 4 would create over 11,000 folders
- File system limits may be reached with very deep structures


## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
