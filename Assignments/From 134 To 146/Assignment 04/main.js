/*
Assignment 04
You have a Regular Expression Pattern.
You are required to break it down into parts and explain each part in a separate comment.
*/

let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// PART 1: Protocol matching
// /                         // Start of regex literal
// http                      // Matches literal characters "http"
// s?                        // Makes the "s" optional (matches "http" or "https")
// :                         // Matches literal colon
// \/                        // Escaped forward slash (matches "/")
// \/                        // Escaped forward slash (matches "/")
// So far matches: "http://" or "https://"

// PART 2: Optional subdomain
// (?:                       // Start of non-capturing group (groups without saving)
//   [-\w]+                  // Matches one or more: hyphens OR word characters (letters, digits, underscore)
//   \.                      // Matches literal dot (period)
// )                         // End of non-capturing group
// ?                         // Makes the entire group optional (0 or 1 time)
// So far matches: Optional subdomain like "www." or "blog."

// PART 3: Main domain name (CAPTURING GROUP)
// (                         // Start of capturing group (saves this match)
//   [-\w]+                  // Matches one or more: hyphens OR word characters
// )                         // End of capturing group
// This captures the main domain name (e.g., "example", "my-site")

// PART 4: Top-level domain
// \.                        // Matches literal dot
// \w+                       // Matches one or more word characters (letters, digits, underscore)
// So far matches: ".com", ".org", ".net", etc.

// PART 5: Optional second-level TLD
// (?:                       // Start of non-capturing group
//   \.                      // Matches literal dot
//   \w+                     // Matches one or more word characters
// )                         // End of non-capturing group
// ?                         // Makes this group optional
// Matches things like ".co.uk" where "co" is the second part and "uk" is the TLD

// PART 6: Optional trailing slash
// \/?                       // Matches optional forward slash (0 or 1 time)
// Matches trailing slash like "https://example.com/"

// PART 7: Query string and everything after
// .                         // Matches any character except newline
// *                         // Matches the previous token (any character) zero or more times
// Matches everything after the domain: path, query parameters, anchors
// Examples: "/path", "/page?q=search", "#section"

// PART 8: Flags
// /                         // End of regex literal
// i                         // Case-insensitive flag (matches uppercase/lowercase letters)
