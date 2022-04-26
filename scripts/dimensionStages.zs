// Import the DimensionStages class so we can use it in the script.
import mods.dimstages.DimensionStages;

// Stages the nether to "one". This will prevent access to the dimension if access
// player does not have stage "one" unlocked. You can define more than one stage
// to require multiple stages. 
//
// Descriptor
// DimensionStages.stageDimension(dimensionId, stageNames...);
//
// Example 1
// DimensionStages.stageDimension("minecraft:the_nether", "one", "two");
//
// Example 2
// DimensionStages.stageDimension("minecraft:the_end", "end", "quest_alien");
//DimensionStages.stageDimension("minecraft:the_nether", "one");

// Stages the end dimension to stage "two". This will prevent access if the
// player does not have that stage. The player will also be shown a custom
// message when they are prevented from entering.
//
// Descriptor
// DimensionStages.stageDimensionWithMessage(dimensionId, message, stageNames...);
//
// Example 1
// DimensionStages.stageDimensionWithMessage("minecraft:the_end", "Come back later.", "two");
// 
// Example 2 
// DimensionStages.stageDimensionWithMessage("minecraft:the_nether", "Access denied.", "two", "three");
//DimensionStages.stageDimensionWithMessage("minecraft:the_end", "The end is too scary, come back later.", "two");


DimensionStages.stageDimensionWithMessage( "minecraft:the_nether", "Requires Flint and Steel!", "nether");
