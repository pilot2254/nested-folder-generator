import fs from 'fs';
import path from 'path';

/**
 * Configuration object for customizing the folder creation
 * This makes the script flexible and reusable
 */
const config = {
  // Array of folder names to create at each level
  folderNames: ['0', '1'],
  
  // Maximum depth of nesting
  nestingDepth: 3,
  
  // Base directory where folders will be created
  baseDir: './binary_tree_folders',
  
  // Whether to log each folder creation
  verbose: true,
  
  // Whether to show a summary at the end
  showSummary: true
};

/**
 * Recursive function to create nested folders based on configuration
 * @param {string} basePath - Current directory path where folders will be created
 * @param {number} depth - How many more levels of folders to create
 * @param {number} created - Counter for created folders (used for statistics)
 * @returns {number} - Number of folders created in this branch
 */
function createNestedFolders(basePath, depth, created = 0) {
  // Base case: if depth reaches 0, stop the recursion
  if (depth <= 0) return created;
  
  // Local counter for this function call
  let foldersCreated = created;
  
  // Loop through each folder name in the configuration
  for (const folderName of config.folderNames) {
    // Create the full path for this folder
    const folderPath = path.join(basePath, folderName);
    
    try {
      // Create the folder
      fs.mkdirSync(folderPath, { recursive: true });
      foldersCreated++;
      
      // Log folder creation if verbose mode is enabled
      if (config.verbose) {
        console.log(`Created folder: ${folderPath}`);
      }
      
      // Recursively create nested folders and add to the count
      foldersCreated = createNestedFolders(folderPath, depth - 1, foldersCreated);
    } catch (err) {
      console.error(`Error creating folder ${folderPath}:`, err);
    }
  }
  
  return foldersCreated;
}

/**
 * Calculate the theoretical total number of folders
 * For n folder names and depth d, the formula is:
 * sum(n^i) for i from 1 to d
 */
function calculateTotalFolders(folderCount, depth) {
  let total = 0;
  for (let i = 1; i <= depth; i++) {
    total += Math.pow(folderCount, i);
  }
  return total;
}

// Create the base directory if it doesn't exist
if (!fs.existsSync(config.baseDir)) {
  fs.mkdirSync(config.baseDir);
}

// Display starting information
console.log('Starting folder creation with the following configuration:');
console.log(`- Folder names: ${config.folderNames.join(', ')}`);
console.log(`- Nesting depth: ${config.nestingDepth}`);
console.log(`- Base directory: ${config.baseDir}`);

// Calculate theoretical folder count
const folderCount = config.folderNames.length;
const theoreticalTotal = calculateTotalFolders(folderCount, config.nestingDepth);
console.log(`This will create up to ${theoreticalTotal} folders.`);

// Start the recursive folder creation and get the actual count
const startTime = Date.now();
const actualFoldersCreated = createNestedFolders(config.baseDir, config.nestingDepth);
const endTime = Date.now();

// Show summary if enabled
if (config.showSummary) {
  console.log('\nFolder creation complete!');
  console.log(`- Created ${actualFoldersCreated} folders`);
  console.log(`- Time taken: ${(endTime - startTime) / 1000} seconds`);
  
  // Calculate the structure depth (how many levels deep)
  const maxDepth = Math.floor(Math.log(actualFoldersCreated) / Math.log(folderCount)) + 1;
  console.log(`- Maximum structure depth: ${maxDepth} levels`);
}
